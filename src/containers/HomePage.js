import React from "react";

import Grid from "@material-ui/core/Grid";

function TodoContainer() {
  return (
    <div>
      <Grid container spacing={5} style={{ padding: 24 }}>
        <Grid item xs={12}>
          <h1>Consuelo Sanna</h1>
          <h4>Test Test Test</h4>
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoContainer;
