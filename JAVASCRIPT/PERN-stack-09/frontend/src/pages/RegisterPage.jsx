import { Button, Card, Input } from "../components/ui";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold">Registro</h3>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Ingrese su Nombre"
            {...register("name", { required: true })}
          />

          {errors.name && (
            <p className="text-red-600">Este campo es requerido</p>
          )}

          <Input
            type="email"
            placeholder="Ingrese su Email"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <p className="text-red-600">Este campo es requerido</p>
          )}

          <Input
            type="password"
            placeholder="Ingrese su Contraseña"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <p className="text-red-600">Este campo es requerido</p>
          )}

          <Button>Registrarse</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
