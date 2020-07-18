
import { Component } from '@angular/core';
@Component({
    selector: 'app-deep-dive',
    templateUrl: './deep-dive.component.html'
})

export class DeepDiveComponent{
    serverName:string;
    serverContent:string;
    addServer = false;
    addBlueprint = false;
    names=[];
    contents=[];
    addedServers = [];

    onAddServer(){
        this.names.push(this.serverName);
        this.contents.push(this.serverContent);
        this.addedServers.push(true);
        this.addServer = true;
        this.addBlueprint = false;
    }

    onAddBlueprint(){
        this.names.push(this.serverName);
        this.contents.push(this.serverContent);
        this.addedServers.push(false);
        this.addBlueprint = true;
        this.addServer = false;
    }
    

    
}