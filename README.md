# Three-Sandbox
Three.js Sandbox Repo for collecting functions, UI elements, etc. 


## Overview
The goal of this repo is to create and collect a series of repeatably used functions related to Three.js, and specifically focused on loading and interacting with Rhino 3dm models. Alongside a basic HTML template and CSS file, a series of Javascript modules will be created that cover the wide range of functions needed to load, render and interact with Three.js models.

## Structure
### Folder Structure
Currently, the goal is to organize the structure of the repo based on the heirarchy of how the function modules get imported, see below rough diagram of organization:

```
index.html
style.css

/public
    ↳ /models 
    ↳ /imgs

/src
    ↳ /model 
        - SceneInit.js 
        - Lighting.js 
        - Load3dm.js 
    ↳ /ui 
    ↳ /utils 
```


## To-Do's