import auth from "@/utils/auth";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  try {
    const newUser = await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
      },
    });
    return new Response(JSON.stringify({ user: "Registered Successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
    });
  }
}
