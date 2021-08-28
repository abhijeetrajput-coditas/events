import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'events';

  currentFeedback1=""
  isVisible =false;


  superheros = [ { Name:'Ironman',Img:'https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675', HeroId:'0', Power:'Genius level intellect Proficient scientist and engineer Powered armor suit: Superhuman strength, speed, durability, agility, reflexes, and senses Supersonic flight Energy repulsor and missile projection Regenerative life support' },
                { Name:'Hulk' ,Img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c968711-596d-46f5-93c2-0b0da03b2bd5/d4n0dmw-198a94f6-6997-4560-9f17-84db0c85cef5.jpg/v1/fill/w_900,h_499,q_75,strp/ultimate_marvel_vs_capcom_3_hulk_wallpaper_by_kaboxx_d4n0dmw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk5IiwicGF0aCI6IlwvZlwvOWM5Njg3MTEtNTk2ZC00NmY1LTkzYzItMGIwZGEwM2IyYmQ1XC9kNG4wZG13LTE5OGE5NGY2LTY5OTctNDU2MC05ZjE3LTg0ZGIwYzg1Y2VmNS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wZ8ZIORJYJohG3QaD9VBDpicAm2veLcc4C4vo0F-GFM', HeroId:'1',Power:'The Hulks strength remains at the top level of all super human beings on Earth and increases exponentially as his anger grows. This strength grants him not only upper body prowess, but also the ability to leap great distances and land without harm to himself'},
               { Name:'Caption America',Img:'https://www.pixel4k.com/wp-content/uploads/2019/02/captain-america-new-art-4k_1550511749.jpg', HeroId:'2',Power:'Captain America has agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed. The Super-Soldier formula that he has metabolized has enhanced all of his bodily functions to the peak of human efficiency.'},
               { Name:'Thor',Img:'https://i.pinimg.com/736x/a5/38/5c/a5385c1e22e8cdd5088a6d4c2b5afb9b.jpg', HeroId:'3',Power:'He also possesses superhuman strength, speed, agility, durability and immunity to most diseases. Thor greatest weapon, and closest ally, is Mjolnir, an enchanted hammer forged from Uru metal, which has power over storms and can generate energy blasts known as anti-force.'},
               { Name:'Dead Pool ',Img:'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/08/Ryan-Reynolds-in-Deadpool.jpg', HeroId:'4',Power:'Regeneration Extended longevity Skilled marksman, swordsman, and hand-to-hand combatant Using devices granting teleportation and holographic disguise Superhuman strength, durability, and agility'},
               { Name:'Joker',Img:'https://c4.wallpaperflare.com/wallpaper/594/527/696/movies-joaquin-phoenix-joker-joker-2019-movie-men-hd-wallpaper-preview.jpg', HeroId:'5',Power:'The Joker possesses no superhuman abilities, instead using his expertise in chemical engineering to develop poisonous or lethal concoctions and thematic weaponry, including razor-tipped playing cards, deadly joy buzzers, and acid-spraying lapel flowers.'},
               { Name:'Batman',Img:'https://eloutput.com/app/uploads-eloutput.com/2020/04/Batman.jpg', HeroId:'6',Power:'Genius-level intellect Expert detective Master martial artist and hand-to-hand combatant Master tactician, strategist, and field commander Access to high-tech equipment'},
               { Name:'Black Panther',Img:'https://geeksoncoffee.com/wp-content/uploads/2018/09/BeFunky-collage-9.jpg', HeroId:'7',Power:'As chieftain, the Panther is entitled to consume a special heart-shaped herb which, in addition to his mystical, shamanistic connection with the Wakandan Panther God Bast, grants him superhumanly acute senses, enhanced strength, speed, agility, stamina, durability, healing, and reflexes.'},
               { Name:'Wolverine',Img:'https://wallpaperaccess.com/full/130739.jpg', HeroId:'8',Power:'It was revealed that Wolverines mutant powers included superhuman strength and reflexes, enhanced senses and tracking abilities, and a special healing power that also slows his aging.'},
               { Name:'Spiderman',Img:'https://a-static.besthdwallpaper.com/black-spider-man-falling-wallpaper-1920x1080-11154_48.jpg', HeroId:'9',Power:'Superhuman strength, speed, reflexes, agility, coordination and balance Ability to cling to solid surfaces Accelerated healing Genius level intellect Proficient scientist and engineer Precognitive spider-sense ability Utilizing wrist-mounted web-shooters'}
              ]

    index:any;


    shouldDisplay(val:any){
    this.index=val
  }

  getFeedback1(val:any){
  this.currentFeedback1=val;
  alert("Your feedback is submitted Successfully !")
  }

  CheckFeedback(val:any){
  if (val == ""){
  alert("Please Leave your Feedback")
  }
  }

}
