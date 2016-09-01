/*

We want routes to use short names to designate entities, for the sake of
readability. But internally (in queries and in state), we use URIs because they
are the obvious candiate to work as unique identifiers. Hence, we need some
functions that map routes to URIs, and URIs to short names (that will be used in
`Link`s).

Let's say we have a route like this '/correspondence/nacer2-ateco2007'. We
should interpret it as "show information about the correspondence 
http://stamina-project.org/codes/nacer2-ateco2007/correspondence".

In this simple example, it seems that we just need to add a prefix to the short
name, but:
- in the future there might be multiple prefixes, so how do we know which prefix
to use;
- some URIs are more complex; for instance, a classification URI looks like
http://stamina-project.org/codes/cpcv11/cpc; what should we use in the route ? 
'cpcv11' (suggesting that there will only be one classification), or multiple
parameters: 'cpcv11' and 'cpc' ?

Below, some example of URIs for different entities:

classifications:
http://stamina-project.org/codes/cpcv11/cpc
http://stamina-project.org/codes/cpcv2/cpc
http://stamina-project.org/codes/cpcv21/cpc
http://stamina-project.org/codes/isicr31/isic

correspondences:

http://stamina-project.org/codes/isicr4-nacer2/correspondence
http://stamina-project.org/codes/nacer2-ateco2007/correspondence
http://stamina-project.org/codes/nacer2-cpav21/correspondence

levels:

http://stamina-project.org/codes/nacer2/sections"
http://stamina-project.org/codes/nacer2/divisions
http://stamina-project.org/codes/nacer2/groups
http://stamina-project.org/codes/nacer2/classes

items:

http://stamina-project.org/codes/nacer2/section/A
http://stamina-project.org/codes/nacer2/section/B
http://stamina-project.org/codes/nacer2/section/C
...
http://stamina-project.org/codes/nacer2/division/02
http://stamina-project.org/codes/nacer2/division/03
*/

import { connect } from 'react-redux'
//Empty shell. For now we work with URIs, the idea is to later add logic
//to mapping functions to build URIs based on short names and information
//contained in the state (for example: add a prefix)
const mapping = {
  '/details/:classification': (state, { routeParams: { classification } }) => {
    return { classification }
  }
}

export const connectFromRoute = (...args) => connect(
  (state, ownProps) => {
    const mapRoute = mapping[ownProps.route.path]
    return mapRoute ? mapRoute(state, ownProps) : {}
  })(...args)


