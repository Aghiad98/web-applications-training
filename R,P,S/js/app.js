import {   createbullets ,renderChoices} from './ui.js'

import { selectUserChoice ,getUserName} from "./game.js";




        init()

    function init(){

     getUserName();
    renderChoices();

    selectUserChoice();

    createbullets(3) ;


    }


