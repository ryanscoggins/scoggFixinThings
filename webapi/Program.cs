using Microsoft.EntityFrameworkCore;
using webapi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseMySql(builder.Configuration.GetConnectionString("DbConnectionString"), ServerVersion.Parse("10.6.14-mariadb"));
});

var app = builder.Build();

app.Use(async (context, next) =>

{

    await next();

    if (context.Response.StatusCode == 404 && !System.IO.Path.HasExtension(context.Request.Path.Value))

    {

        context.Request.Path = "/index.html";

        await next();

    }

});

app.UseDefaultFiles();

app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
