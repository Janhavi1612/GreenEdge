//Display filters
import React from "react";
import {Checkbox, Card } from "antd";

class HouseholdIncome extends React.PureComponent {
  constructor(props) {
    props.setFilterData('initial2')
    super(props);
    this.state = {
      ChargingStations:false,
      CommunityCenters:false,

      UnemploymentLevel1: false,
      UnemploymentLevel2: false,
      UnemploymentLevel3: false,

      PopulationDensityLevel1: false,
      PopulationDensityLevel2: false,
      PopulationDensityLevel3: false,

      NumberofHomeOwnersLevel1: false,
      NumberofHomeOwnersLevel2: false,
      NumberofHomeOwnersLevel3: false,

      NumberofRentersLevel1: false,
      NumberofRentersLevel2: false,
      NumberofRentersLevel3: false,

      DemographicIndexLevel1: false,
      DemographicIndexLevel2: false,
      DemographicIndexLevel3: false,


    };
  }



  render() {

    const {
      ChargingStations,
      CommunityCenters,
      UnemploymentLevel1,
      UnemploymentLevel2,
      UnemploymentLevel3,

      PopulationDensityLevel1,
      PopulationDensityLevel2,
      PopulationDensityLevel3,

      NumberofHomeOwnersLevel1,
      NumberofHomeOwnersLevel2,
      NumberofHomeOwnersLevel3,

      NumberofRentersLevel1,
      NumberofRentersLevel2,
      NumberofRentersLevel3,

      DemographicIndexLevel1,
      DemographicIndexLevel2,
      DemographicIndexLevel3,

    } = this.state;

    this.props.setFilterData(this.state)

    let filterData = {
      '000' : false
    }
    const height = 100;

    return (
        <div>

          <div>
            <div style={{padding:"5px",width:"220px"}}>
              <Card title="Unemployment"
                  hoverable
                  bordered={true}
                  style={{width: 210, height: 125}}
                  size="small"
                  headStyle={{backgroundColor: '#87b2d4'}}>
                <Checkbox 
                checked={UnemploymentLevel1}
                onChange={({ target: { checked } }) =>
                      this.setState({ UnemploymentLevel1: checked })
                  }>Most Dense</Checkbox><br/>
                
                <Checkbox 
                checked={UnemploymentLevel2}
                onChange={({ target: { checked } }) =>
                      this.setState({ UnemploymentLevel2: checked })
                  }>2nd Most Dense</Checkbox><br/>

                <Checkbox 
                checked={UnemploymentLevel3}
                onChange={({ target: { checked } }) =>
                      this.setState({ UnemploymentLevel3: checked })
                  }>3rd Most Dense</Checkbox><br/>
            </Card>
            </div>
            
            <div style={{padding:"5px",width:"220px"}}>
              <Card title="Population Density"
                  hoverable
                  bordered={true}
                  style={{width: 210, height: 125}}
                  size="small"
                  headStyle={{backgroundColor: '#ffa54d'}}>
                <Checkbox 
                checked={PopulationDensityLevel1}
                onChange={({ target: { checked } }) =>
                      this.setState({ PopulationDensityLevel1: checked })
                  }>Most Dense</Checkbox><br/>
                
                <Checkbox 
                checked={PopulationDensityLevel2}
                onChange={({ target: { checked } }) =>
                      this.setState({ PopulationDensityLevel2: checked })
                  }>2nd Most Dense</Checkbox><br/>

                <Checkbox 
                checked={PopulationDensityLevel3}
                onChange={({ target: { checked } }) =>
                      this.setState({ PopulationDensityLevel3: checked })
                  }>3rd Most Dense</Checkbox><br/>
            </Card>
            </div>

            
            <div style={{padding:"5px",width:"220px"}}>
              <Card title="Number of Home Owners"
                  hoverable
                  bordered={true}
                  style={{width: 210, height: 125}}
                  size="small"
                  headStyle={{backgroundColor: '#a64da6'}}>
                <Checkbox 
                checked={NumberofHomeOwnersLevel1}
                onChange={({ target: { checked } }) =>
                      this.setState({ NumberofHomeOwnersLevel1: checked })
                  }>Most Dense</Checkbox><br/>
                
                <Checkbox 
                checked={NumberofHomeOwnersLevel2}
                onChange={({ target: { checked } }) =>
                      this.setState({ NumberofHomeOwnersLevel2: checked })
                  }>2nd Most Dense</Checkbox><br/>

                <Checkbox 
                checked={NumberofHomeOwnersLevel3}
                onChange={({ target: { checked } }) =>
                      this.setState({ NumberofHomeOwnersLevel3: checked })
                  }>3rd Most Dense</Checkbox><br/>
            </Card>
            </div>          

          <div style={{padding:"5px",width:"220px"}}>
              <Card title="Number of Renters"
                  hoverable
                  bordered={true}
                  style={{width: 210, height: 125}}
                  size="small"
                  headStyle={{backgroundColor: '#f9a7d2'}}>
                <Checkbox 
                checked={NumberofRentersLevel1}
                onChange={({ target: { checked } }) =>
                      this.setState({ NumberofRentersLevel1: checked })
                  }>Most Dense</Checkbox><br/>
                
                <Checkbox 
                checked={NumberofRentersLevel2}
                onChange={({ target: { checked } }) =>
                      this.setState({ NumberofRentersLevel2: checked })
                  }>2nd Most Dense</Checkbox><br/>

                <Checkbox 
                checked={NumberofRentersLevel3}
                onChange={({ target: { checked } }) =>
                      this.setState({ NumberofRentersLevel3: checked })
                  }>3rd Most Dense</Checkbox><br/>
            </Card>
            </div>
            <div style={{padding:"5px",width:"220px"}}>
              <Card title="Demographic Index"
                  hoverable
                  bordered={true}
                  style={{width: 210, height: 125}}
                  size="small"
                  headStyle={{backgroundColor: '#367a34'}}>
                <Checkbox 
                checked={DemographicIndexLevel1}
                onChange={({ target: { checked } }) =>
                      this.setState({ DemographicIndexLevel1: checked })
                  }>0-0.29</Checkbox><br/>
                
                <Checkbox 
                checked={DemographicIndexLevel2}
                onChange={({ target: { checked } }) =>
                      this.setState({ DemographicIndexLevel2: checked })
                  }>0.30-0.69</Checkbox><br/>

                <Checkbox 
                checked={DemographicIndexLevel3}
                onChange={({ target: { checked } }) =>
                      this.setState({ DemographicIndexLevel3: checked })
                  }>0.7-1.0</Checkbox><br/>
            </Card>
            </div>

            <div style={{padding:"5px",width:"220px"}}>
              <Card title="Markers"
                    hoverable
                    bordered={true}
                    style={{width: 210, height: 125}}
                    headStyle={{backgroundColor: 'red'}}
                    size="small">
               
                <Checkbox
                    checked={ChargingStations}
                    onChange={({ target: { checked } }) =>
                        this.setState({ ChargingStations: checked })
                    }>Charging stations</Checkbox><br/>
                <Checkbox
                    checked={CommunityCenters}
                    onChange={({ target: { checked } }) =>
                        this.setState({ CommunityCenters: checked })
                    }>Community centers</Checkbox><br/>
              </Card>
            </div>
        </div>
        </div>
    );
  }
}

const Filter = (prop) => (
    <div className="app">
      <section className="section">
        <HouseholdIncome setFilterData={prop.setFilterData}/>
      </section>
    </div>
);

export default Filter;