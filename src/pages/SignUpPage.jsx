import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { role_id: "" },
  });

  const selectedRole = watch("role_id");
  const isStore = roles.find((r) => r.id === Number(selectedRole))?.name === "Store";

  useEffect(() => {
    api.get("/roles").then((res) => {
      setRoles(res.data);
      // Customer'ı default seç
    });
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError("");

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
    };

    if (isStore) {
      payload.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxNo,
        bank_account: data.storeBankAccount,
      };
    }

    try {
      await api.post("/signup", payload);
      navigate(-1, {
        state: { message: "You need to click link in email to activate your account!" },
      });
      alert("You need to click link in email to activate your account!");
    } catch (err) {
      setServerError(err?.response?.data?.message ?? "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold text-[#252B42] mb-6 text-center">Create Account</h1>

        {serverError && (
          <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Name</label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" },
              })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
              })}
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]{8,}$/,
                  message: "Must include uppercase, lowercase, number and special char",
                },
              })}
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (val) => val === watch("password") || "Passwords do not match",
              })}
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Role</label>
            <select
              {...register("role_id", { required: "Please select a role" })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option value="">Select a role...</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            {errors.role_id && <p className="mt-1 text-xs text-red-500">{errors.role_id.message}</p>}
          </div>

          {/* Store Fields */}
          {isStore && (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-700">Store Name</label>
                <input
                  {...register("storeName", {
                    required: "Store name is required",
                    minLength: { value: 3, message: "Store name must be at least 3 characters" },
                  })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                  placeholder="Store name"
                />
                {errors.storeName && <p className="mt-1 text-xs text-red-500">{errors.storeName.message}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Store Phone</label>
                <input
                  {...register("storePhone", {
                    required: "Store phone is required",
                    pattern: {
                      value: /^(\+90|0)?[0-9]{10}$/,
                      message: "Invalid Turkish phone number",
                    },
                  })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                  placeholder="05XX XXX XX XX"
                />
                {errors.storePhone && <p className="mt-1 text-xs text-red-500">{errors.storePhone.message}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Tax ID</label>
                <input
                  {...register("storeTaxNo", {
                    required: "Tax ID is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Must match pattern: TXXXXVXXXXXX",
                    },
                  })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                  placeholder="T1234V123456"
                />
                {errors.storeTaxNo && <p className="mt-1 text-xs text-red-500">{errors.storeTaxNo.message}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Bank Account (IBAN)</label>
                <input
                  {...register("storeBankAccount", {
                    required: "IBAN is required",
                    pattern: {
                      value: /^TR\d{24}$/,
                      message: "Invalid IBAN (must start with TR followed by 24 digits)",
                    },
                  })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                  placeholder="TR000000000000000000000000"
                />
                {errors.storeBankAccount && <p className="mt-1 text-xs text-red-500">{errors.storeBankAccount.message}</p>}
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-blue-500 py-3 text-sm font-bold text-white disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

        </form>
      </div>
    </div>
  );
}