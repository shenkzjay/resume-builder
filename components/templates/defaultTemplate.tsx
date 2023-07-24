import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DefaultTemplate: React.FC = () => {
  return (
    <section>
      <div
        className={`p-4 border space-y-4 hover:border-green-500 `}
        role="button"
      >
        {/**Name section */}
        <div>
          <h2>Olajide Seun</h2>
        </div>

        {/**address */}
        <div>
          <p>right back at ya!</p>
        </div>

        {/**telephone */}
        <div>
          <p>0903</p>
        </div>
      </div>
    </section>
  );
};

export default DefaultTemplate;
