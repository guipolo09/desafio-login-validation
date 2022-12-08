import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disable, onClick }: IButtonProps) => {
  console.log(disable);

  return (
    <ButtonContainer
      onClick={() => {
        if (disable) {
          alert("Formulário enviado com sucesso!");
          return;
        }
      }}
      disabled={!disable}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
