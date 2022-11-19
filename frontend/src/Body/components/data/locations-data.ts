export const locations = [
    {
      locationId: 1,
      geographical: {
        address: 11,
        FIPS: 2017,
        longtitute:34,
        latitute:16,
      },
      population: {
        density: 3422,
        level: "Most Dense",
      },
      income:{
        pct_low_income:50,
        pct_from_35k_to_74k:32,
        pct_from_75k_to_99k:32,
        pct_from_100k_to_150k:32,
        pct_from_150k:32,
      },
      housingvehicle:{
        renter_population: 345,
        number_of_vehicles:345,
        renter_occupied_housing: 343,
        renter_occupied_one_vehicle:24,
        renter_occupied_two_vehicle:24,
        pct_large_apartment:45,
        qty_pulic_housing:453,
        qty_subsidized_housing:456,
      },
      socioecon_indicators:{
        unemployment_rate:34,
        pct_linguistically:24,
        pct_less_than_hign_school: 23,
      },
    },
    {
        locationId: 2,
        geographical: {
          address: "1420 Centre Ave",
          FIPS: 2017,
          longtitute:34,
          latitute:16
        },
        population: {
          density: 3422,
          level: "Most Dense"
        },
        income:{
          pct_low_income:50,
          pct_from_35k_to_74k:32,
          pct_from_75k_to_99k:32,
          pct_from_100k_to_150k:32,
          pct_from_150k:32,
        },
        housingvehicle:{
          renter_population: 345,
          number_of_vehicles:345,
          renter_occupied_housing: 343,
          renter_occupied_one_vehicle:24,
          renter_occupied_two_vehicle:24,
          pct_large_apartment:45,
          qty_pulic_housing:453,
          qty_subsidized_housing:456,
        },
        socioecon_indicators:{
          unemployment_rate:34,
          pct_linguistically:24,
          pct_less_than_hign_school: 23,
        },
      },
      {
        locationId: 1,
        geographical: {
          address: 11,
          FIPS: 2017,
          longtitute:34,
          latitute:16,
        },
        population: {
          density: 3422,
          level: "Most Dense",
        },
        income:{
          pct_low_income:50,
          pct_from_35k_to_74k:32,
          pct_from_75k_to_99k:32,
          pct_from_100k_to_150k:32,
          pct_from_150k:32,
        },
        housingvehicle:{
          renter_population: 345,
          number_of_vehicles:345,
          renter_occupied_housing: 343,
          renter_occupied_one_vehicle:24,
          renter_occupied_two_vehicle:24,
          pct_large_apartment:45,
          qty_pulic_housing:453,
          qty_subsidized_housing:456,
        },
        socioecon_indicators:{
          unemployment_rate:34,
          pct_linguistically:24,
          pct_less_than_hign_school: 23,
        },
      },
  ];
export const overview =[
    {
        total_number_locations: locations.length,
        selected_filters: {
            unemployment:{
                status:true,
                value:"most dense",
            },
            population_density:{
                status:true,
                value:"second most dense",
            },
            number_of_homeowners:{
                status:true,
                value:"most dense",
            },
            number_of_renters:{
                status:false,
                value:"unselected",
            },
            demographic_index:{
                status:false,
                value:"unselected",
            },
        },
        // selected_filters: {
        //     unemployment:{
        //         most_dense: true,
        //         second_most_dense: false,
        //         third_most_dense: false,
        //     },
        //     population_density:{
        //         most_dense: false,
        //         second_most_dense: true,
        //         third_most_dense: false,
        //     },
        //     number_of_homeowners:{
        //         most_dense: true,
        //         second_most_dense: false,
        //         third_most_dense: false,
        //     },
        //     number_of_renters:{
        //         most_dense: false,
        //         second_most_dense: false,
        //         third_most_dense: false,
        //     },
        //     demographic_index:{
        //         under_twenty_nine: false,
        //         thiry_to_sixtynine: false,
        //         seventy_to_hundred: false,
        //     },
        // },
    },
]