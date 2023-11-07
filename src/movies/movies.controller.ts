import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service'; 


@Controller()
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get('movie/movies')
  async getPopularMovies() {
    return this.MoviesService.getPopularMovies();
  }
  
}
