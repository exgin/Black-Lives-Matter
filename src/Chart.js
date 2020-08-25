import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurveys } from './redux/actionCreatorSurvey';
import './Chart.scss';

function Chart() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { surveys } = useSelector((st) => st);

  /* fetch our survey data */
  useEffect(() => {
    async function getSurveyData() {
      await dispatch(fetchSurveys());
      setIsLoading(false);
    }
    if (isLoading) {
      getSurveyData();
    }
  }, [dispatch, isLoading]);

  /* Black Data */
  let blackData = {
    sex: {
      males: 0,
      females: 0,
    },
    racism: {
      yes: 0,
      no: 0,
    },
    vote: {
      yes: 0,
      no: 0,
    },
    police: {
      yes: 0,
      no: 0,
    },
    community: {
      yes: 0,
      no: 0,
    },
  };

  /* Hispanic Data */
  let hispanicData = {
    sex: {
      males: 0,
      females: 0,
    },
    racism: {
      yes: 0,
      no: 0,
    },
    vote: {
      yes: 0,
      no: 0,
    },
    police: {
      yes: 0,
      no: 0,
    },
    community: {
      yes: 0,
      no: 0,
    },
  };

  /* Native Data */
  let nativeData = {
    sex: {
      males: 0,
      females: 0,
    },
    racism: {
      yes: 0,
      no: 0,
    },
    vote: {
      yes: 0,
      no: 0,
    },
    police: {
      yes: 0,
      no: 0,
    },
    community: {
      yes: 0,
      no: 0,
    },
  };

  /* Asian Data */
  let asianData = {
    sex: {
      males: 0,
      females: 0,
    },
    racism: {
      yes: 0,
      no: 0,
    },
    vote: {
      yes: 0,
      no: 0,
    },
    police: {
      yes: 0,
      no: 0,
    },
    community: {
      yes: 0,
      no: 0,
    },
  };

  /* White Data */
  let whiteData = {
    sex: {
      males: 0,
      females: 0,
    },
    racism: {
      yes: 0,
      no: 0,
    },
    vote: {
      yes: 0,
      no: 0,
    },
    police: {
      yes: 0,
      no: 0,
    },
    community: {
      yes: 0,
      no: 0,
    },
  };

  /* Other Data */
  let otherData = {
    sex: {
      males: 0,
      females: 0,
    },
    racism: {
      yes: 0,
      no: 0,
    },
    vote: {
      yes: 0,
      no: 0,
    },
    police: {
      yes: 0,
      no: 0,
    },
    community: {
      yes: 0,
      no: 0,
    },
  };

  surveys.map((res) => {
    /*************************/
    if (res.ethnicity === 'Black or African American') {
      /* calculating sex */
      if (res.sex === 'Male') {
        blackData.sex.males += 1;
      } else if (res.sex === 'Female') {
        blackData.sex.females += 1;
      }

      /* calculating racism */
      if (res.racism === 'Yes') {
        blackData.racism.yes += 1;
      } else if (res.racism === 'No') {
        blackData.racism.no += 1;
      }

      /* calculating vote */
      if (res.vote === 'Yes') {
        blackData.vote.yes += 1;
      } else if (res.vote === 'No') {
        blackData.vote.no += 1;
      }

      /* calculating police */
      if (res.police === 'Yes') {
        blackData.police.yes += 1;
      } else if (res.police === 'No') {
        blackData.police.no += 1;
      }

      /* calculating police */
      if (res.community === 'Yes') {
        blackData.community.yes += 1;
      } else if (res.community === 'No') {
        blackData.community.no += 1;
      }
    }

    /*************************/
    if (res.ethnicity === 'Hispanic or Latino') {
      /* calculating sex */
      if (res.sex === 'Male') {
        hispanicData.sex.males += 1;
      } else if (res.sex === 'Female') {
        hispanicData.sex.females += 1;
      }

      /* calculating racism */
      if (res.racism === 'Yes') {
        hispanicData.racism.yes += 1;
      } else if (res.racism === 'No') {
        hispanicData.racism.no += 1;
      }

      /* calculating vote */
      if (res.vote === 'Yes') {
        hispanicData.vote.yes += 1;
      } else if (res.vote === 'No') {
        hispanicData.vote.no += 1;
      }

      /* calculating police */
      if (res.police === 'Yes') {
        hispanicData.police.yes += 1;
      } else if (res.police === 'No') {
        hispanicData.police.no += 1;
      }

      /* calculating police */
      if (res.community === 'Yes') {
        hispanicData.community.yes += 1;
      } else if (res.community === 'No') {
        hispanicData.community.no += 1;
      }
    }

    /*************************/
    if (res.ethnicity === 'Native American or American Indian') {
      /* calculating sex */
      if (res.sex === 'Male') {
        nativeData.sex.males += 1;
      } else if (res.sex === 'Female') {
        nativeData.sex.females += 1;
      }

      /* calculating racism */
      if (res.racism === 'Yes') {
        nativeData.racism.yes += 1;
      } else if (res.racism === 'No') {
        nativeData.racism.no += 1;
      }

      /* calculating vote */
      if (res.vote === 'Yes') {
        nativeData.vote.yes += 1;
      } else if (res.vote === 'No') {
        nativeData.vote.no += 1;
      }

      /* calculating police */
      if (res.police === 'Yes') {
        nativeData.police.yes += 1;
      } else if (res.police === 'No') {
        nativeData.police.no += 1;
      }

      /* calculating police */
      if (res.community === 'Yes') {
        nativeData.community.yes += 1;
      } else if (res.community === 'No') {
        nativeData.community.no += 1;
      }
    }

    /*************************/
    if (res.ethnicity === 'Asian or Pacificer Islander') {
      /* calculating sex */
      if (res.sex === 'Male') {
        asianData.sex.males += 1;
      } else if (res.sex === 'Female') {
        asianData.sex.females += 1;
      }

      /* calculating racism */
      if (res.racism === 'Yes') {
        asianData.racism.yes += 1;
      } else if (res.racism === 'No') {
        asianData.racism.no += 1;
      }

      /* calculating vote */
      if (res.vote === 'Yes') {
        asianData.vote.yes += 1;
      } else if (res.vote === 'No') {
        asianData.vote.no += 1;
      }

      /* calculating police */
      if (res.police === 'Yes') {
        asianData.police.yes += 1;
      } else if (res.police === 'No') {
        asianData.police.no += 1;
      }

      /* calculating police */
      if (res.community === 'Yes') {
        asianData.community.yes += 1;
      } else if (res.community === 'No') {
        asianData.community.no += 1;
      }
    }

    /*************************/
    if (res.ethnicity === 'White') {
      /* calculating sex */
      if (res.sex === 'Male') {
        whiteData.sex.males += 1;
      } else if (res.sex === 'Female') {
        whiteData.sex.females += 1;
      }

      /* calculating racism */
      if (res.racism === 'Yes') {
        whiteData.racism.yes += 1;
      } else if (res.racism === 'No') {
        whiteData.racism.no += 1;
      }

      /* calculating vote */
      if (res.vote === 'Yes') {
        whiteData.vote.yes += 1;
      } else if (res.vote === 'No') {
        whiteData.vote.no += 1;
      }

      /* calculating police */
      if (res.police === 'Yes') {
        whiteData.police.yes += 1;
      } else if (res.police === 'No') {
        whiteData.police.no += 1;
      }

      /* calculating police */
      if (res.community === 'Yes') {
        whiteData.community.yes += 1;
      } else if (res.community === 'No') {
        whiteData.community.no += 1;
      }
    }

    /*************************/
    if (res.ethnicity === 'Other') {
      /* calculating sex */
      if (res.sex === 'Male') {
        otherData.sex.males += 1;
      } else if (res.sex === 'Female') {
        otherData.sex.females += 1;
      }

      /* calculating racism */
      if (res.racism === 'Yes') {
        otherData.racism.yes += 1;
      } else if (res.racism === 'No') {
        otherData.racism.no += 1;
      }

      /* calculating vote */
      if (res.vote === 'Yes') {
        otherData.vote.yes += 1;
      } else if (res.vote === 'No') {
        otherData.vote.no += 1;
      }

      /* calculating police */
      if (res.police === 'Yes') {
        otherData.police.yes += 1;
      } else if (res.police === 'No') {
        otherData.police.no += 1;
      }

      /* calculating police */
      if (res.community === 'Yes') {
        otherData.community.yes += 1;
      } else if (res.community === 'No') {
        otherData.community.no += 1;
      }
    }
    return res;
  });

  /* Survey Data */
  const totalVoteData = {
    options: {
      title: {
        display: true,
        text: 'Vote',
      },
    },
    labels: ['Black or African American', 'Hispanic or Latino', 'Native American or American Indian', 'Asian or Pacificer Islander', 'White', 'Other'],
    datasets: [
      // first set of data
      {
        label: 'Qualifed to Vote',
        data: [blackData.vote.yes, hispanicData.vote.yes, nativeData.vote.yes, asianData.vote.yes, whiteData.vote.yes, otherData.vote.yes],
        backgroundColor: ['#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8'],
      },
      // second set of data
      {
        label: 'Not Qualifed to Vote',
        data: [blackData.vote.no, hispanicData.vote.no, nativeData.vote.no, asianData.vote.no, whiteData.vote.no, otherData.vote.no],
        backgroundColor: ['##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697'],
      },
    ],
  };

  /* seperator */
  const totalCommunityData = {
    options: {
      title: {
        display: true,
        text: 'Community',
      },
    },
    labels: ['Black or African American', 'Hispanic or Latino', 'Native American or American Indian', 'Asian or Pacificer Islander', 'White', 'Other'],
    datasets: [
      // first set of data
      {
        label: 'Active in their community',
        data: [blackData.community.yes, hispanicData.community.yes, nativeData.community.yes, asianData.community.yes, whiteData.community.yes, otherData.community.yes],
        backgroundColor: ['#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8'],
      },
      // second set of data
      {
        label: 'Not active in their community',
        data: [blackData.community.no, hispanicData.community.no, nativeData.community.no, asianData.community.no, whiteData.community.no, otherData.community.no],
        backgroundColor: ['##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697'],
      },
    ],
  };

  /* seperator */
  const totalPoliceData = {
    options: {
      title: {
        display: true,
        text: 'Police',
      },
    },
    labels: ['Black or African American', 'Hispanic or Latino', 'Native American or American Indian', 'Asian or Pacificer Islander', 'White', 'Other'],
    datasets: [
      // first set of data
      {
        label: 'Victim of police brutality',
        data: [blackData.police.yes, hispanicData.police.yes, nativeData.police.yes, asianData.police.yes, whiteData.police.yes, otherData.police.yes],
        backgroundColor: ['#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8'],
      },
      // second set of data
      {
        label: 'Not a victim of police brutality',
        data: [blackData.police.no, hispanicData.police.no, nativeData.police.no, asianData.police.no, whiteData.police.no, otherData.police.no],
        backgroundColor: ['##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697'],
      },
    ],
  };

  /* seperator */
  const totalRacismData = {
    options: {
      title: {
        display: true,
        text: 'Racism',
      },
    },
    labels: ['Black or African American', 'Hispanic or Latino', 'Native American or American Indian', 'Asian or Pacificer Islander', 'White', 'Other'],
    datasets: [
      // first set of data
      {
        label: 'Victim of racism',
        data: [blackData.racism.yes, hispanicData.racism.yes, nativeData.racism.yes, asianData.racism.yes, whiteData.racism.yes, otherData.racism.yes],
        backgroundColor: ['#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8'],
      },
      // second set of data
      {
        label: 'Not a victim of racism',
        data: [blackData.racism.no, hispanicData.racism.no, nativeData.racism.no, asianData.racism.no, whiteData.racism.no, otherData.racism.no],
        backgroundColor: ['##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697'],
      },
    ],
  };

  /* seperator */
  const totalSexData = {
    options: {
      title: {
        display: true,
        text: 'Sex',
      },
    },
    labels: ['Black or African American', 'Hispanic or Latino', 'Native American or American Indian', 'Asian or Pacificer Islander', 'White', 'Other'],
    datasets: [
      // first set of data
      {
        label: 'Males',
        data: [blackData.sex.males, hispanicData.sex.males, nativeData.sex.males, asianData.sex.males, whiteData.sex.males, otherData.sex.males],
        backgroundColor: ['#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8', '#9dc6c8'],
      },
      // second set of data
      {
        label: 'Females',
        data: [blackData.sex.females, hispanicData.sex.females, nativeData.sex.females, asianData.sex.females, whiteData.sex.females, otherData.sex.females],
        backgroundColor: ['##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697', '##7b9697'],
      },
    ],
  };

  return (
    <div className='Chart'>
      <div className='container'>
        <Bar data={totalVoteData} width={100} height={300} options={{ maintainAspectRatio: false, responsive: true }} />
      </div>

      <hr />

      <div className='container'>
        <Bar data={totalCommunityData} width={100} height={300} options={{ maintainAspectRatio: false, responsive: true }} />
      </div>

      <hr />

      <div className='container'>
        <Bar data={totalPoliceData} width={100} height={300} options={{ maintainAspectRatio: false, responsive: true }} />
      </div>

      <hr />

      <div className='container'>
        <Bar data={totalSexData} width={100} height={300} options={{ maintainAspectRatio: false, responsive: true }} />
      </div>

      <div className='container'>
        <Bar data={totalRacismData} width={100} height={300} options={{ maintainAspectRatio: false, responsive: true }} />
      </div>
    </div>
  );
}

export default Chart;
