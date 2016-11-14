import {Injectable, EventEmitter, OnDestroy} from "@angular/core";
import {Observable, Subscription} from "rxjs";

// mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll
const INTERRUPT_EVENTS: string = 'mousedown';

@Injectable()
export class IdleService implements OnDestroy {
  private running: boolean = false;
  private idling: boolean = false;
  private idle: number = 10;   // in seconds
  private timeoutVal: number = 7;  // in seconds
  private countdown: number = 0;

  private eventsObservables: Array<Observable<any>> = new Array;
  private eventsSubscribtion: Array<Subscription> = new Array;

  public onInterrupt: EventEmitter<any> = new EventEmitter();
  public onIdleStart: EventEmitter<any> = new EventEmitter();
  public onTimeout: EventEmitter<any> = new EventEmitter();
  public onTimeoutWarning: EventEmitter<any> = new EventEmitter();
  public onIdleEnd: EventEmitter<any> = new EventEmitter();

  private idleHandle: any;
  private timeoutHandle: any;

  public watch(force?: boolean) {
    // console.debug('watch');
    this.clearIntervals();

    if (this.idling) {
      this.toggleState();
    }

    this.running = true;

    this.idleHandle = setInterval(() => {
      this.toggleState();
    }, this.idle * 1000);

    if (!force) {
      this.setInterrupts();
    }
  }

  private interrupt() {
    // console.debug('interrupt', this.running);
    if (!this.running) {
      return;
    }

    // TODO if interrupt during timeout return
    // if (this.timeoutVal && this.expiry.isExpired()) {
    //   this.timeout();
    //   return;
    // }

    // TODO handler params new InterruptArgs(this, innerArgs);
    this.onInterrupt.emit(null);
    this.clearIntervals();
    this.watch(true);
  }

  private timeout() {
    // console.debug('timeout', this.idling);
    this.running = false;
    this.countdown = 0;
    this.idling = true;
    this.onTimeout.emit(null);
    this.clearIntervals();

    // TODO toggle interrupts subscription observable resume/pause
    this.detach();
  }

  private toggleState() {
    this.idling = !this.idling;

    // console.debug('togglestate', this.idling);

    if (this.idling) {
      // console.debug('idleStart', this.idling);
      this.onIdleStart.emit(null);

      if (this.timeoutVal > 0) {
        this.countdown = this.timeoutVal;
        this.doCountdown();
        this.timeoutHandle = setInterval(() => {
          this.doCountdown();
        }, 1000);
      }
    } else {
      // console.debug('idleEnd', this.idling);
      this.onIdleEnd.emit(null);
    }

    clearInterval(this.idleHandle);
  }

  private doCountdown() {
    // console.debug('docountdown');
    if (this.countdown <= 0) {
      this.timeout();
      return;
    }

    this.onTimeoutWarning.emit(this.countdown);
    this.countdown--;
  }

  private setInterrupts() {
    // console.debug('setInterrupts');
    let self = this;

    // observable events array
    INTERRUPT_EVENTS.split(' ').forEach(event => {
      let source = Observable.fromEvent(document.documentElement, event);
      source.throttleTime(500);
      self.eventsObservables.push(source);
    });
    // console.debug('setInterrupts', this.eventsObservables);

    this.attach();
  }

  private toggleInterrupts(resume: boolean){
    this.eventsSubscribtion.forEach( (sub: Subscription) => {
    } );
  }


  private attach() {
    // console.debug('attach');
    let self = this;

    let handler = () => {
      console.log(self.running);
      self.interrupt();
    };
    // create subscription, observer function
    this.eventsObservables.forEach((src: Observable<any>) => {
      self.eventsSubscribtion.push(src.subscribe(handler));
    });
    // console.debug('attach', this.eventsSubscribtion);
  }

  private detach() {
    // console.debug('detach');
    let self = this;
    this.eventsSubscribtion.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
    this.eventsSubscribtion.length = 0;
  }

  private clearIntervals() {
    clearInterval(this['idleHandle']);
    clearInterval(this.timeoutHandle);
  }

  ngOnDestroy(): void {
    this.clearIntervals();
    this.detach();
  }
}
