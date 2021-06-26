import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave', [
          style({
            // display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        // query(':enter', [
        //   style({ opacity: 0})
        // ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'translateX(-50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(50px)',
              opacity: '0'
            }),
            animate('250ms 120ms ease-out', style({
              opacity: '1',
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      
      ]),

      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave', [
          style({
            // display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        // query(':enter', [
        //   style({ opacity: 0})
        // ], { optional: true }),

        group([
          query(':leave', [
            animate('250ms ease-in', style({
              opacity: '0',
              transform: 'translateX(50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(-50px)',
              opacity: '0'
            }),
            animate('200ms 120ms ease-out', style({
              opacity: '1',
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      
      ])
    ])
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) 
    return outlet.activatedRouteData['tab']
    else {
      return outlet.activatedRouteData['tab']
    }
  }

  ngOnInit() {
    (function(d, m){
        var kommunicateSettings = {"appId":"1833b99090411dcce3ffbccd0a090d90e","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }

}
