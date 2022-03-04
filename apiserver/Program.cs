using Microsoft.Extensions.FileProviders;
// using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowGetFromLocalHost",
        builder => builder
        .WithOrigins("http://localhost:4200")
        .AllowAnyHeader()
        .WithMethods(new string[] { HttpMethod.Get.ToString(), HttpMethod.Head.ToString(), HttpMethod.Options.ToString() })
    );
});

builder.Services.AddControllers();

/*
builder.Services.AddSwaggerGen(options => { 
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "My API",
        Version = "v1",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact { Email = "renzo@pi.net", Name = "Renzo" }
    });
});
*/

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

    /* Swagger not working yet... :(
    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
    // specifying the Swagger JSON endpoint.
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        //options.RoutePrefix = string.Empty;
    });
    */
}

app.UseCors("AllowGetFromLocalHost");

app.UseHttpsRedirection();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\images")),
    RequestPath = "/content"
});

app.UseRouting();

app.MapControllers();

app.Run();
