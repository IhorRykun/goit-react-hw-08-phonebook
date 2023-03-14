import {
  ContainerLoginer,
  ButtonStyled,
  ImgStyledUder,
} from './LiginLogauth.styled';

export const LoginLogautg = name => {
  return (
    <ContainerLoginer>
      <ImgStyledUder
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvdzUagUnP7jVI0o7fOh8siF3pgTC6lx1Rw&usqp=CAU"
        alt=""
      />
      <p>Hello </p>
      <ButtonStyled type="button">Вхід</ButtonStyled>
    </ContainerLoginer>
  );
};
