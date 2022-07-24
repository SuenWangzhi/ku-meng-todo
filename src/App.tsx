import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export const App = defineComponent({
  setup() {
    return () => (
      <>
      <headers>头</headers>
      <div>
        <RouterView/>
      </div>
      </>
    );
  }
})