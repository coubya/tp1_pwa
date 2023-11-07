import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
    private readonly apiKey = '40939acebfc3ca8851fa156130c447c3'; 

    constructor(private httpService: HttpService) {}

  async getPopularMovies() {
    try {
      const response = await this.httpService
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
        .toPromise();

      return response.data.results;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des films populaires : ${error.message}`);
    }
  }
}
