import {Car} from './classes/car.js';
import {Drone} from './classes/Drone.js';
import {data} from './data/data.js';
import {DataService} from './services/data-service.js';
import { Button } from './ui/button.js';


let dataService = new DataService();
dataService.loadData(data);

let button = new Button('Click me!');
button.appendToElement($('body'));