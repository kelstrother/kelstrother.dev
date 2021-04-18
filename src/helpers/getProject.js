import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getProject = (collection, id) => {
  const project = ref(null);
  const error = ref(null);

  const load = async () => {
     try {
        const res = await projectFirestore.collection("projects").doc(id)
        project.value = res.docs.map((doc) => {
           return {...doc.data(), id: doc.id }
         })
      } catch (err) {
         error.value = err.message
         console.log(err.value)
      }
      
      
      return { project, error };
   };
   
   export default getProject;
   
   // let projectRef = projectFirestore.collection(collection).doc(id)

   // const unsub = projectRef.onSnapshot(doc => {
   //    if(doc.data()) {
   //       project.value = {...doc.data(), id: doc.id}
   //       error.value = null
   //    } else {
   //       error.value = "Data doesn't exist in this universal database"
   //    }
   // }, err => {
   //    console.log(err.message)
   //    error.value = "could not get project details"
   //    })
   //    watchEffect((onInvalidate) => {
   //       onInvalidate(() => unsub())
   //    })