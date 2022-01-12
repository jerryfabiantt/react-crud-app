import { useState } from "react";
import { Container } from "reactstrap";
import CareersList from "./CareersList";
import CreateUpdateCareers from "./CreateUpdateCareers";

function Careers() {
  const [currentComponent, setCurrentComponent] = useState("default");
  const [careerToEdit, setCareerToEdit] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const setComponent = (component) => {
    console.log("setComponent", component);
    setIsEdit(false);
    setCurrentComponent(component);
  };

  const editCareer = (career) => {
    setCareerToEdit(career);
    setIsEdit(true);
    setCurrentComponent("Edit");
  };

  return (
    <div>
      <div className="content mt-5">
        <section className="content">
          <Container>
            {currentComponent === "default" ? (
              <CareersList
                setComponent={setComponent}
                showEditForm={editCareer}
              />
            ) : (
              <CreateUpdateCareers
                setComponent={setComponent}
                career={careerToEdit}
                isEdit={isEdit}
              />
            )}
          </Container>
        </section>
      </div>
    </div>
  );
}
export default Careers;
