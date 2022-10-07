import styled from "styled-components";

const Container = styled.button`
  width: 40px;
  height: 40px;
  color: #fff;
  background: #d23f57;
  border-style: none;
  border-color: #d23f57;
  border-radius: 50%;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  z-index: 4;
  position: fixed;
  bottom: 16px;
  right: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default function PageUpwardButton() {
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    } else {
      alert("Anchor not found");
    }
  };

  return (
    <Container
      className="page-upward-button"
      onClick={() => scrollToAnchor("page-top")}
    >
      <i className="fas fa-chevron-up"></i>
    </Container>
  );
}
