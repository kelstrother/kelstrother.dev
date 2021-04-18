import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getProjects = () => {
  const projects = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("projects").get();
      projects.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(res.docs);
    } catch (err) {
      error.value = err.message;
      console.log(err.value);
    }
  };
  return { projects, error, load };
};

export default getProjects;
