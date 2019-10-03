export class Post {
    title : string;
    content : string;
    loveIts : number;
    created_at : object;

    constructor(title,content) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = new Date();
    }

    setLoveIts(val : number){
        this.loveIts = val;
    }

    getLoveIts(){
        return this.loveIts;
    }

    getCreatedDate(){
        return this.created_at;
    }
}
