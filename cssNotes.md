# Floats 
1. details
   - features rows and cells 
   - rows clear the floats on the cells 
   - if float -> must clear (second element must be moved below the first)
   - source ordering in html determines display 
   - drawback is equal column heights 

reason for floats = need to really understand how they work 
float is base foundation for flexbox and CSS grid 


##  Flexbox 
(notes and code here: https://github.com/jen4web/fem-layout/tree/master/day-1-flexbox/2-flexbox-intro)
1. details 
    - has flex-containers = row  -> parent
        this is the <ul>
    - has flex-items = cells  -> child 
        these are the <li>
    - great for vertical centering and equal heights 
    - great for re ordering 

    - downside = works in one dimension 
        basically one continuous row that wraps depending on screen size 
    
    - flex container set to row 
        main is left to right 
        cross is top to bottom

    - three versions 
        - 2009 
            display: box;
        - 2011 
            display: flexbox; (tweener)
        - 2016
            display: flex;


2. code demo: flexbox set up
- flexbox properties at: 
https://static.frontendmasters.com/resources/2017-10-03-responsive-web-design-flexbox-css-grid/Flexbox-and-CSS-Grid-Properties-Cheat-Sheet.pdf

- example on codepen at 
https://codepen.io/frontendmasters/pen/mjBeQL



### Flexbox Grid

for example see flexboxgrid.com
 

## Responsive Images 
- need to change size based on res
- do not do load one big image and just resize 

- do not do client-side load multiple and use one as needed


# CSS Grid 
github https://github.com/jen4web/fem-layout/tree/master/day-2-grid

1. Why 
    - built into css spec 
    - no row markup = two dimensions
    - rule for use 
        - use flexbox for UI elements 
        - use grid for major layouts 