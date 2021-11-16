import styled from "styled-components";

const TaskCard = styled.div`
    display: grid;
    width: 90%;
    height: 105px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 40px 0px 0px 40px;
    margin-bottom: 10px;
    grid-template-columns: 30% 70%;
    grid-template-rows: repeat(3, calc(100%/3));
    grid-template-areas: 
        'poke-img nm-lv'
        'poke-img habit'
        'poke-img exper';
`

const PokeImg = styled.div`
    grid-area: poke-img;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #F4F7FE;
    align-self: center;
    justify-self: center;
`

const Task = ({task}) => {
    return(
        <TaskCard>
            <PokeImg/>
            {/* <h1>{task}</h1> */}
        </TaskCard>
    )
}

export default Task;