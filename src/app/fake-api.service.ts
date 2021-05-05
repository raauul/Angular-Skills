import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let skills = [
      { id: 1, name: 'Communication', description: 'A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.', pic: 'https://cdn.pixabay.com/photo/2016/10/25/18/41/design-1769698_960_720.png', likes: 1 },
      { id: 2, name: 'Coding', description: 'O desenvolvimento contínuo de distintas formas de atuação dos órgãos dirigentes com relação às suas atribuições atuam diretamente a nível organizacional.', pic: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg', likes: 1 },
      { id: 3, name: 'Time Management', description: 'No sentido de aprovar a manutenção das posturas distintas dos órgãos dirigentes com relação às suas atribuições distintas formas de atuação.', pic: 'https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_960_720.png', likes: 1 },
      
    ];

    return { skills };

  }
}
