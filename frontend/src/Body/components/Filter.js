import React from "react";
import { Collapse } from "react-collapse";
import { Button } from "antd";

class HouseholdIncome extends React.PureComponent {
  constructor(props) {
    props.setFilterData('initial2')
    super(props);
    this.state = {
      HouseholdIncomeLevel1: false,
      HouseholdIncomeLevel2: false,
      HouseholdIncomeLevel3: false,
      HouseholdIncomeLevel4: false,

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
      HouseholdIncomeLevel1,
      HouseholdIncomeLevel2,
      HouseholdIncomeLevel3,
      HouseholdIncomeLevel4,

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
    //this.props.setFilterData(filterData)
    const height = 100;

    return (
        <div>
          <div className="config">
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={HouseholdIncomeLevel1}
                  onChange={({ target: { checked } }) => {
                    this.setState({HouseholdIncomeLevel1: checked})
                    //this.props.setFilterData()
                  }
                  }
              />
              $35,000 to $74,999
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={HouseholdIncomeLevel2}
                  onChange={({ target: { checked } }) =>
                      this.setState({ HouseholdIncomeLevel2: checked })
                  }
              />
              $75,000 to $99,999
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={HouseholdIncomeLevel3}
                  onChange={({ target: { checked } }) =>
                      this.setState({ HouseholdIncomeLevel3: checked })
                  }
              />
              $100,000 to $150,000
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={HouseholdIncomeLevel4}
                  onChange={({ target: { checked } }) =>
                      this.setState({ HouseholdIncomeLevel4: checked })
                  }
              />
              $150,000+
            </label>
            <br></br>
            <h2>Unemployment</h2>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={UnemploymentLevel1}
                  onChange={({ target: { checked } }) =>
                      this.setState({ UnemploymentLevel1: checked })
                  }
              />
              Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={UnemploymentLevel2}
                  onChange={({ target: { checked } }) =>
                      this.setState({ UnemploymentLevel2: checked })
                  }
              />
              2nd Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={UnemploymentLevel3}
                  onChange={({ target: { checked } }) =>
                      this.setState({ UnemploymentLevel3: checked })
                  }
              />
              3rd Most Dense
            </label>
            <br></br>
            <h2>Population Density</h2>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={PopulationDensityLevel1}
                  onChange={({ target: { checked } }) =>
                      this.setState({ PopulationDensityLevel1: checked })
                  }
              />
              Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={PopulationDensityLevel2}
                  onChange={({ target: { checked } }) =>
                      this.setState({ PopulationDensityLevel2: checked })
                  }
              />
              2nd Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={PopulationDensityLevel3}
                  onChange={({ target: { checked } }) =>
                      this.setState({ PopulationDensityLevel3: checked })
                  }
              />
              3rd Most Dense
            </label>
            <br></br>
            <h2>Number of Home Owners</h2>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={NumberofHomeOwnersLevel1}
                  onChange={({ target: { checked } }) =>
                      this.setState({ NumberofHomeOwnersLevel1: checked })
                  }
              />
              Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={NumberofHomeOwnersLevel2}
                  onChange={({ target: { checked } }) =>
                      this.setState({ NumberofHomeOwnersLevel2: checked })
                  }
              />
              2nd Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={NumberofHomeOwnersLevel3}
                  onChange={({ target: { checked } }) =>
                      this.setState({ NumberofHomeOwnersLevel3: checked })
                  }
              />
              3rd Most Dense
            </label>
            <br></br>
            <h2>Number of Renters</h2>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={NumberofRentersLevel1}
                  onChange={({ target: { checked } }) =>
                      this.setState({ NumberofRentersLevel1: checked })
                  }
              />
              Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={NumberofRentersLevel2}
                  onChange={({ target: { checked } }) =>
                      this.setState({ NumberofRentersLevel2: checked })
                  }
              />
              2nd Most Dense
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={NumberofRentersLevel3}
                  onChange={({ target: { checked } }) =>
                      this.setState({ NumberofRentersLevel3: checked })
                  }
              />
              3rd Most Dense
            </label>
            <br></br>
            <h2>Demographic Index</h2>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={DemographicIndexLevel1}
                  onChange={({ target: { checked } }) =>
                      this.setState({ DemographicIndexLevel1: checked })
                  }
              />
              0-0.29
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={DemographicIndexLevel2}
                  onChange={({ target: { checked } }) =>
                      this.setState({ DemographicIndexLevel2: checked })
                  }
              />
              0.30-0.69
            </label>
            <br></br>
            <label className="label">
              <input
                  className="input"
                  type="checkbox"
                  checked={DemographicIndexLevel3}
                  onChange={({ target: { checked } }) =>
                      this.setState({ DemographicIndexLevel3: checked })
                  }
              />
              0.7-1.0
            </label>
            <br></br>

            {/*<Button type="primary" shape="round">*/}
            {/*  Submit*/}
            {/*</Button>*/}
          </div>
          <Collapse HouseholdIncomeLevel1={HouseholdIncomeLevel1}>
            <div style={{ height }} className="blob" />
          </Collapse>
          <Collapse HouseholdIncomeLevel2={HouseholdIncomeLevel2}>
            <div style={{ height }} className="blob" />
          </Collapse>
          <Collapse HouseholdIncomeLevel3={HouseholdIncomeLevel3}>
            <div style={{ height }} className="blob" />
          </Collapse>
          <Collapse HouseholdIncomeLevel4={HouseholdIncomeLevel4}>
            <div style={{ height }} className="blob" />
          </Collapse>
        </div>
    );
  }
}

const Filter = (prop) => (
    <div className="app">
      <section className="section">
        <h2>Household Income</h2>
        <HouseholdIncome setFilterData={prop.setFilterData}/>
      </section>
    </div>
);

export default Filter;