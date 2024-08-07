import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  musica: Array<any>;
  
  constructor() {
  
    this.musica = [
      { titulito: "MERCHO", card1: "LiL CaKe, Migrantes", card2: "Artistas: LiL CaKe, Migrantes", card3: "Artista invitado: Nico Valdi", card4: "Álbum: MERCHO", card5: "Fecha de lanzamiento: 2022", img: "../../../../assets/imagenP4/musica1.jpg", link: "https://www.youtube.com/watch?v=VVWH9jJLGkE" },
      { titulito: "M.A (Remix)", card1: "BM, Callejero Fino, La Joaqui, Lola Índigo", card2: "Artistas: BM, Callejero Fino & La Joaqui", card3: "Artista invitado: Lola Índigo", card4: "Álbum: M.A (Remix)", card5: "Fecha de lanzamiento: 2023", img: "../../../../assets/imagenP4/musica3.webp", link: "https://www.youtube.com/watch?v=PTfntSlhnwY" },
      { titulito: "TQG", card1: "KAROL G, Shakira", card2: "Artistas: Shakira, Karol G", card3: "Artista Invitada: Shakira", card4: "Álbum: Mañana será bonito", card5: "Fecha de lanzamiento: 2023 ", img: "../../../../assets/imagenP4/musica2.jpg", link: "https://www.youtube.com/watch?v=jZGpkLElSu8" },
      { titulito: "Ya me Canse ★", card1: "Jheyson y su Grupo Coraje", card2: "Artistas: Jheyson y su Grupo Coraje", card3: "Géneros: Cumbia Sureña", card4: "Álbum: Amor Perdóname", card5: "Fecha de lanzamiento: 2015", img: "../../../../assets/imagenP4/musica4.jpg", link: "https://www.youtube.com/watch?v=T0V2V5UUbF4" },
      { titulito: "Hasta la Muerte", card1: "Kevin y Su Grupo Talizman", card2: "Artista: Kevin y Su Grupo Talizman", card3: "Géneros: Cumbia Sureña", card4: "Álbum: Kevin y Su Grupo Talizman", card5: "Fecha de lanzamiento: 2016", img: "../../../../assets/imagenP4/musica5.jpg", link: "https://www.youtube.com/watch?v=h7F-89E48Ec" },
      { titulito: "Ahora te arrepientes", card1: "Jheyson y Su Grupo Coraje, Muñequita Milly", card2: "Artistas: Jheyson y Su Grupo Coraje, Muñequita Milly", card3: "Artista invitado: Muñequita Milly", card4: "Álbum: Ahora te arrepientes", card5: "Fecha de lanzamiento: 2015", img: "../../../../assets/imagenP4/musica6.jpg", link: "https://www.youtube.com/watch?v=wzcvhUsHHuI" },

    ];
  
  }

  ngOnInit(): void {
  }

}
