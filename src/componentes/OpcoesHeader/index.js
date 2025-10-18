import styled from "styled-components";

const Options = styled.ul`
  display: flex;
  margin-left: 30px;
`;

const Option = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textoOptions = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

function OptionsHeader() {
    return (
        <Options>
          {textoOptions.map((texto) => (
            <Option>{texto}</Option>
          ))}
        </Options>
    );
}

export default OptionsHeader