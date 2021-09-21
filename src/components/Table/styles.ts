import styled from "styled-components";

export const Container = styled.main`
   margin-top: 4rem;

   table {
       width: 100%;
       border-spacing: 0 0.5rem;

       th {
           color: var(--green-dark);
           font-weight: 400;
           padding: 1rem 2rem;
           text-align: left;
           line-height: 1.5rem;
       }

       td {
           padding: 1rem 2rem;
           border: 0;
           background: var(--shape);
           color: var(--text-body);
           border-radius: 0.25rem;

           &:first-child {
               color: var(--text-title);
           }

           span {
                padding: 0.20rem 0.45rem;
                border-radius: 1rem;
                font-size: 0.8rem;
                text-align: center;
           }

           &.NOT_DONE > span{
               background: var(--status-todo);
               color: var(--orange);
           }

           &.IN_PROGRESS > span{
               background: var(--status-doing);
               color: var(--blue);
           }
           
           &.DONE > span{
               background: var(--status-done);
               color: var(--green);
           }

           a {
               display: flex;
               justify-content: center;
           }
       }
   }
`