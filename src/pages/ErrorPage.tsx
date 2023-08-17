import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { SIZE, VARIANTS } from "../interfaces/components";
import "../assets/css/errorpage.scss";
import Text from "../components/Typo";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <Text size={SIZE.ERROR} type={VARIANTS.SUCCESS}>
        404
      </Text>
      <Text size={SIZE.LARGE} type={VARIANTS.DARK}>
        How did you get here?! It’s cool. We’ll help you out.
      </Text>
      <div className="btn_container">
        <Button
          onClick={() => navigate("/", { replace: true })}
          type={VARIANTS.PRIMARY}
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};
export default ErrorPage;
