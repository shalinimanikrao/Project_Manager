export class users {
    public Id: string | undefined; 
    proid: string;
    gfbf: string;
    servline: string;
    projectname: string;
    eimid: string;
    gsd: string;
    prowner: string;

    constructor(Id: any, proid: string, gfbf: string, servline: string, projectname: string, eimid: string, gsd: any, prowner: any) {
        this.proid= proid;
        this.gfbf=gfbf;
        this.servline=servline;
        this.projectname=projectname;
        this.eimid=eimid;
        this.gsd;
        this.prowner;
    }

}