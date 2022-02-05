import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const SkillItem = ({ info }) => {
    return (
        <div className="col-md-4">
            <div class="card bg-dark mb-4">
                <div className="card-body">
                    <div className="progress-header clearfix">
                        <h5 class="card-title float-left">{info.name}</h5>
                        <h6 class="card-title float-right">{info.percent}%</h6>
                    </div>

                    <ProgressBar className="bg-light" animated variant="success" style={{ height: "1px" }} now={info.percent} />

                </div>
            </div>
        </div>
    );
};

export default SkillItem;