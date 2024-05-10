# Three-Sandbox
Three.js Sandbox Repo for collecting functions, UI elements, etc. 


## Overview
The goal of this repo is to create and collect a series of repeatably used functions related to Three.js, and specifically focused on loading and interacting with Rhino 3dm models. Alongside a basic HTML template and CSS file, a series of Javascript modules will be created that cover the wide range of functions needed to load, render and interact with Three.js models.

## Structure
### Folder Structure
The ultimate goal is to set up a series of scripts that, similar to a React project can be plugged into the main html with minimal re-writing of the base site structure. This means that there will likely be a series of nested functions for both UI and model functionality.

Currently, the goal is to organize the structure of the repo based on the heirarchy of how the function modules get imported, see below rough diagram of organization:

```
index.html                  //Main index file
style.css                   //Main styling file

/public
    ↳ /models               //Location for all 3dm files
    ↳ /imgs                 //Location for any image files

/src
    ↳ /model                //Folder containing any functions related to Three.js model
        - SceneInit.js 
        - Lighting.js 
        - Load3dm.js 
    ↳ /ui                   //Folder containing any functions related to UI interaction
    ↳ /utils                //Folder containing any basic util functions
        - HandleWindowResize.js 
```


## To-Do's