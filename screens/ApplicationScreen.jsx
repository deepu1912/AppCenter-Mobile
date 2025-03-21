import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {DataTable, Provider} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {deleteApplication} from '../redux/feature/deleteAppSlice';
import {fetchAppList} from '../redux/feature/getAppListSlice';

export default function ApplicationScreen() {
  // export default function ApplicationScreen() {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4, 6, 8]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );

  const data = [
    {
      appName: 'MyApp',
      os: 'iOS',
      releaseType: 'Beta',
      platform: 'Mobile',
    },
    {
      appName: 'SuperApp',
      os: 'Android',
      releaseType: 'Production',
      platform: 'Mobile',
    },
    {
      appName: 'TechieApp',
      os: 'Windows',
      releaseType: 'Alpha',
      platform: 'Desktop',
    },
    {
      appName: 'ShopEasy',
      os: 'macOS',
      releaseType: 'Production',
      platform: 'Desktop',
    },
    {
      appName: 'GameTime',
      os: 'Android',
      releaseType: 'Beta',
      platform: 'Mobile',
    },
    {
      appName: 'StudyHub',
      os: 'iOS',
      releaseType: 'Production',
      platform: 'Mobile',
    },
    {
      appName: 'Weather Pro',
      os: 'Windows',
      releaseType: 'Alpha',
      platform: 'Desktop',
    },
    {
      appName: 'QuickNotes',
      os: 'macOS',
      releaseType: 'Beta',
      platform: 'Desktop',
    },
    {
      appName: 'FitTrack',
      os: 'Android',
      releaseType: 'Production',
      platform: 'Mobile',
    },
    {
      appName: 'CodeFlow',
      os: 'Linux',
      releaseType: 'Alpha',
      platform: 'Desktop',
    },
    {
      appName: 'FitTrack',
      os: 'Android',
      releaseType: 'Production',
      platform: 'Mobile',
    },
    {
      appName: 'CodeFlow',
      os: 'Linux',
      releaseType: 'Alpha',
      platform: 'Desktop',
    },
    {
      appName: 'FitTrack',
      os: 'Android',
      releaseType: 'Production',
      platform: 'Mobile',
    },
    {
      appName: 'CodeFlow',
      os: 'Linux',
      releaseType: 'Alpha',
      platform: 'Desktop',
    },
  ];
  console.log('navigate', navigation);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchAppList());
    console.log('get all the application');
  }, []);
  const handleDelete = () => {
    console.log('delete icon clicked');
    console.log('get all the application');
    // dispatch(deleteApplication());
    // dispatch(fetchAppList());
  };

  // const handleAppPress = item => {
  //   console.log(item);
  //   // , {appName: item.appName}
  //   navigation.navigate('Release');
  // };
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // return (
  //   <Provider>
  //     <View style={styles.container}>
  //       <Header />
  //       {/* <ScrollView horizontal={true}> */}
  //       <View style={styles.tableContainer}>
  //         <ScrollView>
  //           <DataTable style={styles.elevatedTable}>
  //             <DataTable.Header>
  //               <DataTable.Title style={styles.appTitle}>
  //                 App Name
  //               </DataTable.Title>
  //               <DataTable.Title style={styles.osTitle}>OS</DataTable.Title>
  //               <DataTable.Title style={styles.releaseTitle}>
  //                 Release Type
  //               </DataTable.Title>
  //               <DataTable.Title style={styles.platformTitle}>
  //                 Platform
  //               </DataTable.Title>
  //               <DataTable.Title style={styles.actionTitle}>
  //                 Actions
  //               </DataTable.Title>
  //             </DataTable.Header>

  //             {data.slice(from, to).map((item, index) => (
  //               <DataTable.Row key={index}>
  //                 <DataTable.Cell style={styles.app}>
  //                   <TouchableOpacity
  //                     onPress={() => navigation.navigate('Release')}>
  //                     <Text style={styles.appName}>{item.appName}</Text>
  //                   </TouchableOpacity>
  //                 </DataTable.Cell>
  //                 <DataTable.Cell style={styles.os}>{item.os}</DataTable.Cell>
  //                 <DataTable.Cell style={styles.release}>
  //                   {item.releaseType}
  //                 </DataTable.Cell>
  //                 <DataTable.Cell style={styles.platform}>
  //                   {item.platform}
  //                 </DataTable.Cell>
  //                 <DataTable.Cell style={styles.action}>
  //                   <TouchableOpacity onPress={handleDelete}>
  //                     <Image
  //                       source={require('../asset/images/trash.png')}
  //                       style={styles.deleteIcon}
  //                     />
  //                   </TouchableOpacity>
  //                 </DataTable.Cell>
  //               </DataTable.Row>
  //             ))}

  //             <DataTable.Pagination
  //               page={page}
  //               numberOfPages={Math.ceil(data.length / itemsPerPage)}
  //               onPageChange={page => setPage(page)}
  //               label={`${from + 1}-${to} of ${data.length}`}
  //               numberOfItemsPerPageList={numberOfItemsPerPageList}
  //               numberOfItemsPerPage={itemsPerPage}
  //               onItemsPerPageChange={onItemsPerPageChange}
  //               showFastPaginationControls
  //               selectPageDropdownLabel={'Rows per page'}
  //             />
  //           </DataTable>
  //         </ScrollView>
  //       </View>
  //     </View>
  //   </Provider>
  // );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.appContainer}>
          {data.map((item, key) => {
            return (
              <View style={styles.card}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Release')}>
                  <View style={styles.appDetails}>
                    <View style={styles.firstRow}>
                      <Text style={[styles.appName, styles.text]}>
                        {item.appName}
                      </Text>
                      <Text style={[styles.osType, styles.text]}>
                        {item.os}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.releaseLabel}>Release Type:</Text>
                      <Text style={[styles.releaseType, styles.text]}>
                        {item.releaseType}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
            console.log('item', item);
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616C6F',
  },
  appContainer: {
    // width: '100%',
    // height: 'auto',
    marginVertical: 10,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#fff',
  },
  appDetails: {
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  releaseLabel: {
    fontSize: 18,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#616C6F',
//   },
//   tableContainer: {
//     flex: 1,
//   },
//   elevatedTable: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     elevation: 5,
//   },
// deleteIcon: {
//   width: 20,
//   height: 20,
//   // marginLeft: 40,
//   // flex: 1,
//   // justifyContent: 'flex-end',
// },

//   tableTitle: {
//     marginLeft: 10,

//     flex: 1, // Allow titles to stretch and adjust their width accordingly
//   },

//   platformTitle: {
//     flex: 1, // Adjusting width for platform column

//     justifyContent: 'flex-end',
//   },
//   actionTitle: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },

//   releaseTitle: {
//     flex: 1.3,
//     justifyContent: 'flex-end',
//     // backgroundColor: 'orange',
//   },
//   osTitle: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   appTitle: {
//     flex: 1.3,
//     justifyContent: 'flex-start',
//   },
//   platform: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   release: {
//     flex: 1.3,
//     justifyContent: 'flex-end',
//   },

//   os: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },

//   app: {
//     flex: 1.3,
//   },
//   action: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   appName: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
// add this to anroid/app/build.gradle
// npm install react-native-vector-icons