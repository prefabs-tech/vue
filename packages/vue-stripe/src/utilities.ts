import { useRouter } from "vue-router";

export const useBackNavigation = (emitCallback?: () => void) => {
  const router = useRouter();

  const handleBack = () => {
    if (emitCallback) {
      emitCallback();
    }

    router.push("/");
  };

  return { handleBack };
};
