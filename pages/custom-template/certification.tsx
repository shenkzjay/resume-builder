import { RootState } from "@/states/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import {
  updateCertification,
  addCertification,
  deleteCertification,
} from "@/states/reducers/slice/textUpdateSlice";

const Certification = () => {
  //init router
  const router = useRouter();

  const selectedTemplate = Number(router.query.template);

  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

  const dispatch = useDispatch();
  const updateCert = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  const handleDeleteCertification = (index: number) => {
    dispatch(deleteCertification(index));
  };

  return (
    <section className="flex">
      <div className="w-1/2">
        {updateCert.map((item, index) => (
          <div>
            <input
              type="text"
              value={item.value}
              className="border"
              onChange={(e) =>
                dispatch(updateCertification({ index, value: e.target.value }))
              }
            />
            <button onClick={() => handleDeleteCertification(index)}>
              delete
            </button>
          </div>
        ))}
        <button onClick={() => dispatch(addCertification({ value: "" }))}>
          add certification
        </button>
        <div className="space-x-4">
          <button> ←Back</button>
          <button
            onClick={() =>
              router.push({
                pathname: "/custom-template/preview",
                query: { template: selectedTemplate },
              })
            }
          >
            Next→{" "}
          </button>
        </div>
      </div>
      <section className="w-1/2">
        <div>{TemplateComponent}</div>
      </section>
    </section>
  );
};

export default Certification;
