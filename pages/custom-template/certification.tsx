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
    <section className="">
      <div className="mx-auto container">
        <div className="my-10 ">
          <p className="font-bold text-4xl">Got a certification?</p>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2">
            {updateCert.map((item, index) => (
              <div className="flex justify-between mb-6">
                <input
                  type="text"
                  value={item.value}
                  className="border px-4 py-3 rounded w-full"
                  onChange={(e) =>
                    dispatch(
                      updateCertification({ index, value: e.target.value })
                    )
                  }
                />
                <button
                  onClick={() => handleDeleteCertification(index)}
                  className="mx-4"
                >
                  delete
                </button>
              </div>
            ))}
            <button
              onClick={() => dispatch(addCertification({ value: "" }))}
              className="px-4 py-3 font-semibold bg-cyan-600 text-white rounded"
            >
              Add certification
            </button>
            <div className="space-x-4 mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default Certification;
