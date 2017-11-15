export class Player {

  name: string;
  teamName: string;
  experience: number;
  points: number;
  constructor( name: string ,  teamName: string,  experience: number,  points: number){
    this.name = name;
    this.teamName = teamName;
    this.experience = experience;
    this.points = points;
  }

}
