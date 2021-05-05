import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() card;
 

  private mediaSub: Subscription;
    
  constructor(
      private cdRef: ChangeDetectorRef,
      private mediaObserver: MediaObserver,
      
) { 

  }

  ngOnInit() {

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change);
      }
    );
  }
  ngAfterViewInit(){}
  ngOnDestroy(){
    if (this.mediaSub){
      this.mediaSub.unsubscribe();
    }
  }

  onLike(card: any){
    console.log(card)
    // TODO: incrementar o like, salvar via rest
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
    
  
  }

}
