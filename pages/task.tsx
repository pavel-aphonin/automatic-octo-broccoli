import Grid from "@mui/material/Unstable_Grid2";
import Tree from "../component/tree";
import blockService from "../services/block.service";

const Task = () => {

  const getContent = async () => {
    const data = await blockService.getData();

    return data;
  }

  getContent();

  return (
    <Grid
      container
      flexDirection="row"
      flexWrap="nowrap"
      alignContent='stretch'

      className='task'
    >
      <Grid
        className='task-tree'
      >
        <Tree />
      </Grid>
      <Grid
        className='task-content'
      >
        Content
      </Grid>
    </Grid>
  )
}

export default Task;
