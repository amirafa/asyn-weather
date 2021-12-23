class Storage{
    constructor(city,state){
        this.city=city;
        this.state=state;
        this.defCity='تهران';
        this.defState='تهران';
    }

    getLocationData(){
        if(localStorage.getItem('city')===null && localStorage.getItem('state')===null){
            this.city=this.defCity;
            this.state=this.defState;
        }else{
            this.city=localStorage.getItem('city');
            this.state=localStorage.getItem('state');
        }

        return {
            city : this.city ,
            state: this.state
        }
    }

    setLocationData(city,state){
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
        // this.city=city;
        // this.sate=state;
    }
}