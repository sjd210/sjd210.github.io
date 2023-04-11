import React from 'react';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router';

function A(title:{title:string}) {
    let body;
    console.log(title.title);
    switch (title.title) {
        case("Cambridge Game Jam 2023"):
            body = CamGameJam();
            break;
    }

    return(
        <div className="Page">
            <p className="Title">
                {title.title}
            </p>
            {body}
        </div>
    );
}

function CamGameJam() {
return(
    <p className="Body">
        From the 10th to 12th February 2023, the Cambridge Game Jam was a game jam hosted in the Computer Science department in Cambridge University.
        <br/>
        I was part of the committee organising and hosting the jam (CS3 - consisting of myself, Nils Andre, Summer Leigh, Tim McGilly, Dan Wendon-Blixrud, and Gwendolen Sellers).
        <br/>
        I also took part in the jam in a small team, making the game "Return to Worm".
        <br/>
        <br/>
        My primary role during organisation was student communication - this involved... (ARU/SOCS/DEPT)
    </p>
)
}

export default A;