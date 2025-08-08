import ExternalLink from '../common/ExternalLink';
const ProjectItem = ({ projectInfo }) => {
  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card-deck mt-3 w-100">
        <div className="card bg-dark h-100 w-100 p-3">
          <img
            className="card-img-top"
            src={projectInfo.image}
            alt={projectInfo.name}
            height={400}
          />
          <div className="card-body">
            <div className="project-details">
              <ExternalLink href={projectInfo.demo}>
                <h5 className="card-title text-info">{projectInfo.name}</h5>
              </ExternalLink>
              <p className="card-text text-white">{projectInfo.description}</p>
              {/* demo live and source code link */}
              <div className="links">
                <ul>
                  <li>
                    <ExternalLink className="ms-1" href={projectInfo.source}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                      </svg>
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href={projectInfo.demo}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
                      </svg>
                    </ExternalLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* technologies used */}
            <div className="tool-list text-info text-justify">
              <ul>
                <li>{projectInfo.tools1}</li>
                <li>{projectInfo.tools2}</li>
                <li>{projectInfo.tools3}</li>
                <li>{projectInfo.tools4}</li>
                <li>{projectInfo.tools5}</li>
                <li>{projectInfo.tools6}</li>
                <li>{projectInfo.tools7}</li>
                <li>{projectInfo.tools8}</li>
                <li>{projectInfo.tools9}</li>
                <li>{projectInfo.tools10}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
