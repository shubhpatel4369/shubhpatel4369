import React from 'react'
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        Home Component
    
<ul>
    <li><Link to ="/tripplan">Tripplan</Link></li>
    <li><Link to ="/traveldiary">Traveldiary</Link></li>
</ul>
    </div>
 )

}
