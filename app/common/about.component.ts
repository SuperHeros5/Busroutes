import { Component, OnInit , AfterViewInit , AfterContentInit , ViewChild , ElementRef} from '@angular/core';

declare var google : any;

@Component({
   
    selector: 'about',
    templateUrl: 'app/common/about.component.html',
    
})

export class AboutComponent implements OnInit, AfterViewInit ,AfterContentInit {
    constructor(public myElement : ElementRef) { 
       
    }

    ngOnInit() {  }
  
    ngAfterViewInit(){
     
                 var myOptions = {zoom:16,center:new google.maps.LatLng(17.2309294,78.5631429),mapTypeId: google.maps.MapTypeId.ROADMAP};
               
                 this.map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
                
                 this.marker = new google.maps.Marker({map: this.map,position: new google.maps.LatLng(17.2309294,78.5631429)});this.infowindow = new google.maps.InfoWindow({content:'<strong>TCS Adibatla</strong><br> Adibhatla, Telangana 501510, India<br>'});
                 google.maps.event.addListener(this.marker, 'click', function(){this.infowindow.open(this.map,this.marker);});this.infowindow.open(this.map,this.marker);
            
    
    }
ngAfterContentInit(){
    
}
}