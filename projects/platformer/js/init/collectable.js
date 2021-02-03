(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCollectable(type.db, 200, 170, 6, 0.7);//#1
        createCollectable(type.db, 400, 230, 8, 0.9);//#2
        createCollectable(type.db, 700, 412, 14, 0.9);//#3
        createCollectable(type.kennedi, 792, 142, 14, 0.9);//Save Them
        createCollectable(type.max, 793, 142, 14, 0.9);
        createCollectable(type.steve, 794, 142, 14, 0.9);
        createCollectable(type.grace, 795, 142, 14, 0.9);
        createCollectable(type.db, 248, 352, 11, 0.9);
        createCollectable(type.db, 358, 252, 11, 0.9);
        createCollectable(type.db, 343, 552, 11, 0.9);
        createCollectable(type.db, 128, 412, 11, 0.9);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);