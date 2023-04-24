export class FaceSnap {
    _id!:number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;
  }


/* export class FaceSnap{
    title:string;
    description:string; 
    createdDate:Date; 
    snaps:number;
    imageUrl:string;
    location?:string;

    constructor(title:string, description:string, imageUrl:string, createdDate:Date, snaps:number,location?:string){
        this.title=title;
        this.description=description;
        this.imageUrl=imageUrl;
        this.createdDate=createdDate;
        this.snaps=snaps;
        this.location=location;

    }
} */

/* export class FaceSnap{
    constructor(
        public title:string, 
        public description:string, 
        public imageUrl:string, 
        public createdDate:Date, 
        public snaps:number){   
            }
} */